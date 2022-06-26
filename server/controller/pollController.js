const path = require('path');
const fs = require('fs').promises;
const { StatusCodes } = require('http-status-codes');

const dataFile = path.join(`${__dirname}/../data.json`);

exports.getAllPolls = async (req, res, next) => {
  let data = JSON.parse(await fs.readFile(dataFile, 'utf-8'));
  const totalVotes = Object.values(data).reduce((acc, cur) => (acc += cur), 0);

  data = Object.entries(data).map(([label, vote]) => {
    return {
      label,
      percentage: ((vote * 100) / totalVotes).toFixed(0) || 0,
    };
  });

  res.status(StatusCodes.OK).json(data);
};

exports.createPoll = async (req, res, next) => {
  const data = JSON.parse(await fs.readFile(dataFile, 'utf-8'));

  data[req.body.add]++;

  await fs.writeFile(dataFile, JSON.stringify(data));

  res.status(StatusCodes.CREATED).json(data);
};
