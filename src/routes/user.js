import { Router } from 'express';

import User from '../models/user';

const router = Router();

// Create
router.post('/',  async (req, res) =>
{
	const user = new User(req.body);
	await user.save();
	return res.send(user);
});

// Read/Retrieve
router.get('/', async (req, res) =>
{
	const users = await User.find(
    {});
	return res.send(users);

});

router.get('/:userId', async (req, res) =>
{
	const user = await User.findById(req.params.userId);
	return res.send(user);
});

// Update
router.put('/:userId', async (req, res) =>
{
	const user = await User.updateOne(
	{
		_id: req.params.userId
	},
	{
		...req.body
	});
	return res.send(`Received PUT requests. ${req.params.userId}`);
});

// Delete
router.delete('/:userId', (req, res) =>
{
	return res.send(`Received DELETE requests. /${req.params.Id}`);
});

export default router;