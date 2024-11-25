import User from '../models/user.js';

// Register new user
const registerUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
      .populate('organization')
      .populate('roles');

    if (!user || !(user.password === password)) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all users (renamed from getUsers to getAllUsers)
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
      .populate('organization')
      .populate('roles');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get user by ID (implementation stays the same, just renamed export)
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate('organization')
      .populate('roles');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update user (renamed from updateUser to updateUserById)
const updateUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('organization').populate('roles');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete user (implementation stays the same)
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { registerUser, loginUser, getAllUsers, getUserById, updateUserById, deleteUser };
