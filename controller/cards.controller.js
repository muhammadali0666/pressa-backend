const { Cards } = require("../model")
const jwt = require("jsonwebtoken")
const { Op } = require("sequelize")

Cards.sync({ force: false })

const addCard = async (req, res) => {
  const { title, fullname, profession, date, time, network, view, phoneNumber, img } = req.body

  await Cards.create({ title, fullname, profession, date, time, network, view, phoneNumber, img })

  return res.send("added card!")

}

const getCards = async (_, res) => {
  const getData = await Cards.findAll()
  res.send(getData)
}

const updateAnnouncement = async (req, res) => {
  const { id, isApply } = req.body

  const updatedUser = await Cards.update({ isApply }, {
    returning: true,
    plain: false,
    where: {
      id
    }
  })

  return res.send(updatedUser.filter(e => e))

}

const updateActive = async (req, res) => {
  const { id, isActive } = req.body

  const updatedUser = await Cards.update({ isActive }, {
    returning: true,
    plain: false,
    where: {
      id
    }
  })

  return res.send(updatedUser.filter(e => e))
}

// const Search = async (req, res) => {
//   try{
//     const { fullname } = req.body;

//   const result = await Cards.findAll({
//     where: {
//       [Op.or]: [
//         { fullname },
//         // { date }
//       ]
//     }
//   })
//   return res.send(result)
//   }
//   catch(Error) {
//     return res.send(Error)
//   }
// }


const headerSearch = async (req, res) => {
  try {
    const { fullname } = req.headers;

    let nameToLowerCase = fullname.toLowerCase();
    let nameValidation = nameToLowerCase.trim();

    const resultName = await Cards.findAll({
      where: {
        [Op.or]: [
          { fullname: nameValidation }
        ]
      }
    })

    if (!resultName[0]) {
      return res.send({ msg: "Ma'lumot topilmadi!!!" })
    }

    return res.send(resultName)
  }
  catch (Error) {
    return res.send({ msg: "Error" })
  }
}

const elonHeaderSearch = async (req, res) => {
  try {
    const { search } = req.headers;

    let searchToLowerCase = search.toLowerCase();

    let searchValidation = searchToLowerCase.trim();

    let objIsmsharif = await Cards.findAll({
      where: { fullname: searchValidation },
    });

    let objSana = await Cards.findAll({
      where: { date: searchValidation },
    });

    let objOnline = await Cards.findAll({
      where: { network: searchValidation },
    });

    let objYunalish = await Cards.findAll({
      where: { profession: searchValidation },
    });

    if (!objSana[0] && !objOnline[0] && !objYunalish[0]) {
      return res.status(201).send(objIsmsharif);
    } else if (
      !objIsmsharif[0] &&
      !objSana[0] &&
      !objYunalish[0]
    ) {
      return res.status(201).send(objOnline);
    } else if (
      !objIsmsharif[0] &&
      !objOnline[0] &&
      !objYunalish[0]
    ) {
      return res.status(201).send(objSana);
    } else if (
      !objIsmsharif[0] &&
      !objSana[0] &&
      !objOnline[0]
    ) {
      return res.status(201).send(objYunalish);
    }
  } catch {
    res.send({ msg: "Error" });
  }
};

module.exports = {
  addCard,
  getCards,
  updateAnnouncement,
  updateActive,
  headerSearch,
  elonHeaderSearch
}