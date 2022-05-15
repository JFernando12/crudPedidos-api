import { Router } from "express";
import { showClients, addClient, deleteClient, selectClient, updateClient } from "../controllers/clients";

const router = Router();

router.get("/", showClients);

router.get("/:client_id", selectClient);

router.post("/add", addClient);

router.delete("/:client_id/delete", deleteClient);

router.post("/:client_id/update", updateClient);

export default router;
