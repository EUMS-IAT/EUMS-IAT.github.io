define(['questAPI'], function(Quest){
    var API = new Quest();
	
    /**
	* Page prototype
	*/
    API.addSequence([
        { // page begins
            header: 'Email',
            questions: [
                { // question begins
                    type: 'text',
                    stem: 'Please use your Exeter email to proceed.',
                    required: true,
                    errorMsg: {
                        required: 'This question is truly important to us, please take your time to answer.'
                    }
                } // question ends
            ],

        } // page ends
    ]);

    return API.script;
});