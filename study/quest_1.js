define(['questAPI'], function(Quest){
    var API = new Quest();
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
            ]
        } // page ends
    ]);

    API.addSequence([
        {
            questions : {
                type: 'selectOne',
                style:'multiButtons',
                errorMsg: {
                    required: 'Please select an answer, or click \'decline to answer\''
                },
                name:'item1',
                stem : 'On the whole, I am satisfied with myself.',
                answers : ['Strongly Disagree', 'Disagree', 'Agree', 'Strongly Agree']
            }
        }
    ]);
    
    

   
    return API.script;
});
