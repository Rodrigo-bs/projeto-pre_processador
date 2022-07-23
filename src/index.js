import Processor from "./core/processor.js";

const processor = new Processor();

const app = {
    app: 'app',
    data: {
        mensagem: 'Rodrigo',
        logo: 'Site'
    }
}

processor.init(app);