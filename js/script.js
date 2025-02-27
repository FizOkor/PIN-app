window.onload = () =>{

    function $(DOM) {
        const query = document.querySelectorAll(DOM);
        return query.length === 1 ? query[0] : query;
    }

    $('input.pin-input').forEach(input => input.value = '')

    const inputsContainer = $('#inputs-container');
    const inputs = Array.from(inputsContainer.children);
    const submitBtn = $('.info .btn');
    const inputsLength = inputs.length;

    const pin = [];
    const validPin = 8008;

    const disableAllInputs = () => {
        inputs.map(el => el.disabled = true);
    }
    
    const succcessStyle = (bool) => {
        console.log(bool)
        const colors = {pass:'#00FF40', fail:'#FF0000'};

        inputs.map(el => el.style.borderColor = bool ? colors['pass'] : colors['fail']);
    }

    const delInput = () => {
        const canDelete = inputs.some(el => el.value !== '');
        const inputsRev = inputs.slice().reverse()
        const filledInput = inputsRev.find(el => el.value !== '');
        const fillInputIndex = inputs.findIndex(el => el === filledInput);
        
        if(canDelete){
            console.log(fillInputIndex);
            filledInput.value = '';            
            filledInput.style.borderRadius = '35%';
        }

    }

    const fillInput = num => {
        const emptyInput = inputs.find(el => el.value === '');
        const emptyInputIndex = inputs.findIndex(el => el === emptyInput);
        
        emptyInput.focus();
        emptyInput.value = num;
        emptyInput.style.borderRadius = '50%';
        if(emptyInputIndex === (inputsLength-1)){
            document.removeEventListener('keydown',handleKeyDown);
            // disableAllInputs();
            submitHandler();
        }
    }

    const submitHandler = ()=>{        
        const noInputEmpty = inputs.every(el => el.value !== '');

        if(noInputEmpty){
            const allValues = inputs.reduce((acc, input) => {
                acc.push(input.value)
                return acc;
            },[]).join('');

            const trialPin = Number(allValues);
            const success = trialPin === validPin;
                 
            iosSpinner(submitBtn);
            submitBtn.applyiOSSpinner();
            // submitBtn.style.backgroundColor = 'var(--clr-secondary-dark)';
            // submitBtn.style.color = 'var(--clr-accent)';
            
            setTimeout(()=>{
                succcessStyle(success);
                submitBtn.revertiOSSpinner();
                
                if(!success){
                    submitBtn.textContent = 'Hint: B O O B';
                    submitBtn.addEventListener('click',()=>window.location.reload());
                    return;
                }
                submitBtn.textContent = "Legend!";
                submitBtn.addEventListener('click',()=>window.location.reload());
            },1500);
        }
        
    }

    const handleKeyDown = (e)=>{
        let key = e.key;
        // console.log(key);
        if(!/^\d$/.test(e.key) && key !== 'Backspace'){
            e.preventDefault();
        }else{
            if(key === 'Backspace') {
                delInput();
                return
            }
            const numKey = Number(key);
            fillInput(numKey)
        }
    }
    document.addEventListener('keydown', handleKeyDown);

    submitBtn.addEventListener('click', submitHandler);


}