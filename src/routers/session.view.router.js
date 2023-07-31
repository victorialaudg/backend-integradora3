import { Router } from 'express'
import { privateRoutes, publicRoutes } from '../middlewares/auth.middleware.js'
import UserDTO from '../dto/user.dto..js'
import logger from './../logger.js'

const router = Router()

router.get('/register', privateRoutes, async(req, res) => {
    res.render('sessions/register')
})

router.get('/', privateRoutes, (req, res) => {
    res.render('sessions/login')
})

router.get('/profile', publicRoutes, (req, res) => {
    const userDTO = new UserDTO(req.session.user)
    res.render('sessions/profile', userDTO)
})

router.get('/loggerTest', (req, res) => {
    logger.debug('Mensaje de debug');
    logger.http('Mensaje de petición HTTP');
    logger.info('Mnsaje de información');
    logger.warning('Mensaje de advertencia');
    logger.error('Mensaje de error');
    logger.fatal('Mensaje de error fatal');
    res.json({ status: 'success', message: 'Pruebas ejecutadas exitosamente' })
})

export default router