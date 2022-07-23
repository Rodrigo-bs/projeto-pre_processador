export default class Processor {
    checkIfAppExists(app) {
        if (typeof app != 'string') {
            throw 'O valor passado em app é inválido.';
        }

        this.app = document.querySelector(app);
        this.appContentBeforeProcess = this.app.innerHTML;
    }

    CleanApp() {
        this.app.innerHTML = '';
    }

    processAppData() {
        let appContent = this.appContentBeforeProcess;

        Object.keys(this.options.data).forEach(variable => {
            let regexp = '{{\\s' + variable + '\\s}}';
            regexp = new RegExp(regexp);
    
            appContent = appContent.replace(regexp, this.options.data[variable]);

        });
        
        this.appContentAfterDataProcess = appContent;
    }

    replaceVariables() {
        this.app.innerHTML = this.appContentAfterDataProcess;
    }

    init(options) {
        this.options = options;

        this.checkIfAppExists(options.app);
        this.CleanApp();
        this.processAppData();

        this.replaceVariables();
    }
}