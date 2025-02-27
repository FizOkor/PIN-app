const iosSpinnerHTML = `
  <div class="spinner center">
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
  </div>`;

const iosSpinner = (element) => {
    const elementInitialHTML = element.innerHTML;

    element.applyiOSSpinner = () => {
        element.innerHTML = iosSpinnerHTML;
    }
    
    element.revertiOSSpinner = () =>{
        element.innerHTML = elementInitialHTML;
    }
}