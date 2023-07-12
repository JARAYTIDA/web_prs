import  express  from "express";

// local imports
import { getPosts } from "../controllers/posts.js";


const router = express.Router();

router.get('/', getPosts);

export default router;