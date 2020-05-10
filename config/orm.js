const connection = require("./connection.js");

const orm = {

selectAll: async function (table) {
    const sql = "SELECT * FROM ??";
    const [rows] = await connection.query(sql, [table]);

    return rows;
};

insertOne{};

updateOne{};
}
module.exports;
