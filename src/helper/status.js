export const updateStatus = function(arr, attr, value, status){
    var i = arr.length;
    const newUserDetails = {username: value, status: status}
    while(i--){
       if( arr[i] 
           && arr[i].hasOwnProperty(attr) 
           && (arguments.length > 2 && arr[i][attr] === value ) ){ 

           arr.splice(i, 1, newUserDetails);

       }
    }
    localStorage.setItem('appState', JSON.stringify(arr));
}