import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const googleCallback = (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;

    if (!user) {
        // Si no hay usuario, redirige al login
        return res.redirect('/');
    }

    // Generar el token JWT
    const token = jwt.sign(
        { email: user.email, role: user.role },
        process.env.SECRET_KEY as string,
        { expiresIn: '1h' }
    );

    // redirigir al usuario a home con el token en la url
    res.redirect(`/?token=${token}&name=${encodeURIComponent(user.name)}&user_id=${user.user_id}`);
};
