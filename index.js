mport express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
res.json({
status: "ok",
service: "VortexZen Backend",
message: "Backend is live 🚀"
});
});

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
