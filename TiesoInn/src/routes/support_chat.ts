import { Router } from "express";
import path from "path";
import ChatController from "../controller/chat.controller";
import { authenticateToken } from "../middlewares/auth";

const router = Router();

router.get('/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'support_chat.html'))
});

router.get('/chat/:id', authenticateToken, ChatController.getChat)

router.post('/:id', authenticateToken, ChatController.cretateChat);

router.delete('/:id', authenticateToken, ChatController.deleteChat);

router.put('/:id', authenticateToken, ChatController.addMessage)

export default router;