import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();
export const protect = async (req, res, next) => {
    const athuHeader = req.header.authorization
    if(!athuHeader || !athuHeader.startsWith("Bearer ")) {
        return res.status(401).json({message: "Not authorized"})
    }
    const token = athuHeader.split(" ")[1];
    //bearer token--->header.payload.signature
    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        req.user = decoded;
        next()
    } catch(error) {
        return res.status(401).json({message: "Invalid token"})
    }
}
