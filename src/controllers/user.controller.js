const { httpError, httpSend } = require("#H/httpResponses");
const { hashValue } = require("#H/functions");
const User = require("#M/user.model");
const { generarStringAleatorio } = require("#H/utils");
const sequelize = require("#DB/sequelize");

exports.create_user = async (req, res) => {
  const t = await sequelize.transaction();

  try {
    const { age, email, password } = req.body;

    // Validar que no haya un usuario con este correo electrónico
    const findUser = await User.findOne({ where: { email: email } });
    if (findUser) {
      return httpError(
        res,
        400,
        "Ya existe un usuario con este correo electrónico"
      );
    }

    const randomString = generarStringAleatorio();

    // Crear el usuario en la base de datos
    const createUser = await User.create(
      {
        age,
        email,
        password: hashValue(randomString),
      },
      { transaction: t }
    );
    if (!createUser) {
      throw new Error("No se pudo crear usuario");
    }

    const data = await User.findOne({
      where: { idUser: createUser.idUser },
      attributes: { exclude: ["password"] },
      transaction: t,
      raw: true,
    });

    // Confirmar la transacción y enviar respuesta de éxito
    await t.commit();
    httpSend(res, data, "Usuario creado exitosamente");
  } catch (error) {
    console.error(error);
    // Si ocurre algún error, revertir la transacción y enviar el error como respuesta
    await t.rollback();
    httpError(res, 500, error.message);
  }
};
