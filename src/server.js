import path from 'path';
import express from 'express';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(function render(req, res) {
	res.sendFile(path.resolve(__dirname, 'index.html'));
});

if (module && !module.parent) {
	app.listen(process.env.PORT || 4000);
}

export default app;
