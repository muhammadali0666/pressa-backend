const { Router } = require("express")
const { addCard, getCards, updateAnnouncement, updateActive, headerSearch, elonHeaderSearch } = require("../controller/cards.controller")

const cardRouter = Router()

cardRouter.post("/card", addCard)
cardRouter.get("/get_card", getCards)
cardRouter.put("/update_annon/:id", updateAnnouncement)
cardRouter.put("/update_active/:id", updateActive)
// cardRouter.get("/search", Search)
cardRouter.get("/header_search", headerSearch)
cardRouter.get("/search", elonHeaderSearch)

module.exports = cardRouter