const router = require('express').Router();

const {
    createUser,
    loginUser,
    updateUser,
    deleteOwnAccount,
    getAllUsers,
    deleteUser,
    getUser,
    loginAsAdmin,
    updateRole,
} = require('../controllers/usersController');
const { auth, isSuperAdmin } = require('../middlewares');

router.get('', auth, getUser);
router.get('/all', auth, isSuperAdmin, getAllUsers);
router.post('', createUser);
router.post('/login', loginUser);
router.post('/admin-login', loginAsAdmin);
router.patch('/', auth, updateUser);
router.patch('/:id', auth, isSuperAdmin, updateRole);
router.delete('/', auth, deleteOwnAccount);
router.delete('/:id', auth, isSuperAdmin, deleteUser);

module.exports = router;
