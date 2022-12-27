const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.post("/booklog", (req, res) => {
  const booklog = req.body;
  // ↓エラーの際のレスポンス
  if (!(booklog.name && booklog.text)) {
    return res.json({
      ok: false,
      error: "invalid parameter",
    });
  }
  //↓エラーが出ない際のレスポンス
  res.json({
    ok: true,
    booklog: booklog,
  });
});

app.listen(port, () => {
  console.log("listenできてます");
});
