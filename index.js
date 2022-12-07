const sharp = require('sharp');

exports.cropImage = async (req, res) => {
  const image = sharp(Buffer.from(req.body));
  const meta = await image.metadata();
  const { width, height } = meta;
  const crop = await sharp(Buffer.from(req.body))
    .extract({
      width: getNewWidth(width),
      height: getNewHeight(height),
      left: 0,
      top: 0,
    })
    .toBuffer();
  res.send(crop);
};
