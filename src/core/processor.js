export default class Processor {
    checkIfAppExists(app) {
        if (typeof app != 'string') {
            throw 'O valor passado em app é inválido.';
        }

        this.app = document.querySelector(app);
    }

    processApp() {
        const app = this.app;
        let appContent = app.innerHTML;

        Object.keys(this.options.data).forEach(variable => {
            let regexp = '{{\\s' + variable + '\\s}}';
            regexp = new RegExp(regexp);
    
            appContent = appContent.replace(regexp, this.options.data[variable]);

        });
        
        this.appContent = appContent;
    }

    replaceVariables() {
        this.app.innerHTML = this.appContent;
    }

    init(options) {
        this.options = options;

        this.checkIfAppExists(options.app);
        this.processApp();
        this.replaceVariables();
    }
}