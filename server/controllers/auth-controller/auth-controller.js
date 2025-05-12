import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const register = async (request, response) => {
  try {
    const { userName, userEmail, userPassword, role } = request.body;

    if (!userName || !userEmail || !userPassword || !role) {
      response.status(200).json({
        status: false,
        msg: "All fields are required",
      });
    }

    const alreadyExistUser = await User.findOne({
      $or: [{ userName: userName }, { userEmail: userEmail }],
    });

    if (alreadyExistUser) {
      response.status(200).json({
        status: false,
        msg: "User already exist",
      });
    }

    const hashPassword = await bcrypt.hash(userPassword, 10);

    const newUserCreated = await User.create({
      userName,
      userEmail,
      userPassword: hashPassword,
      role,
    });

    return response.status(200).json({
      status: true,
      msg: "Account Created Successfully",
      userId: newUserCreated?._id,
    });
  } catch (error) {
    response.status(200).json({
      success: false,
      msg: error.message,
    });
  }
};

// =====================================

const login = async (request, response) => {
  try {
    const { userEmail, userPassword } = request.body;

    if (!userEmail || !userPassword) {
      return response.status(200).json({
        success: false,
        msg: "All Fields Are Required",
      });
    }

    const checkUser = await User.findOne({ userEmail: userEmail });

    if (!checkUser) {
      return response.status(200).json({
        success: false,
        msg: "Account Does Not Exists",
      });
    }
    if (await bcrypt.compare(userPassword, checkUser.userPassword)) {
      const accessToken = jwt.sign(
        {
          _id: checkUser?._id,
          userName: checkUser?.username,
          userEmail: checkUser?.userEmail,
          role: checkUser?.role,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: "120m",
        }
      );
      return response.status(200).json({
        success: true,
        msg: "Account Successfully Login",
        accessToken,
      });
    } else {
      return response.status(200).json({
        success: false,
        msg: "Invalid Password",
      });
    }
  } catch (error) {
    return response.status(200).json({
      success: false,
      msg: error.message,
    });
  }
};

export { register, login };
