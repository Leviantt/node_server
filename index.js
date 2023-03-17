require('dotenv').config();
const PORT = process.env.PORT || 4000;
const Application = require('./framework/application');
const filmRouter = require('./src/routers/filmRouter');
const genreRouter = require('./src/routers/genreRouter');

const jsonParser = require('./framework/middlewares/jsonParser');
const urlParser = require('./framework/middlewares/urlParser');
const bodyParser = require('./framework/middlewares/bodyParser');

const app = new Application();

app.use(jsonParser);
app.use(urlParser(`http://localhost:${PORT}`));

app.addRouter(filmRouter);
app.addRouter(genreRouter);

app.listen(PORT, () =>
	console.log(`Server has been started on port ${PORT}...`)
);
