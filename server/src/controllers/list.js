const { list } = require("../../models");

exports.addList = async (req, res) => {
  try {
    const { body } = req;
    const userId = req.user.id;
    console.log("body", body);

    const newList = await list.create({
      ...body,
      idUser: userId,
    });

    res.send({
      status: "success",
      data: { newList },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
    });
  }
};

exports.getLists = async (req, res) => {
  try {
    const Lists = await list.findAll({
      attributes: {
        exclude: ["idUser", "createdAt", "updatedAt"],
      },
    });

    let data = JSON.parse(JSON.stringify(Lists));

    res.send({
      status: "success",
      data: { data },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed get resources",
    });
  }
};

exports.getList = async (req, res) => {
  const { id } = req.params;
  try {
    let Lists = await list.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["idUser", "createdAt", "updatedAt"],
      },
    });

    Lists = JSON.parse(JSON.stringify(Lists));

    res.send({
      status: "success",
      data: {
        ...Lists,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
    });
  }
};

exports.updateList = async (req, res) => {
  try {
    const { id } = req.params;

    await list.update(req.body, {
      where: {
        id,
      },
    });

    let lists = await list.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["idUser", "createdAt", "updatedAt"],
      },
    });
    res.send({
      status: "success",
      list: { lists },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Server Error",
    });
  }
};

exports.deleteList = async (req, res) => {
  try {
    const { id } = req.params;

    await list.destroy({
      where: {
        id,
      },
    });

    res.send({
      status: "success",
      id: id,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
    });
  }
};
