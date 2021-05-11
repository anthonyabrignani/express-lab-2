import express from 'express';
import path from 'path';
import home  from './home';
import specialty from "./specialty-pizza";
import review from "./review-results";
import builder from "./builder-results"

const app = express();

// Settings for web server
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", home);
app.use("/", specialty);
app.use("/", review);
app.use("/", builder);

const port = 3000;
app.listen(port, () => console.log(`Listening on port: ${port}.`));