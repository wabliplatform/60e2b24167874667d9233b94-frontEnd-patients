let apiPatientApi = new TempApi.PatientApi();import TempApi from '../src/index';document.getElementById('iyi5m').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/create' ;}};document.getElementById('igbp7').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("igbp7")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/manage/' + transitionId;}};document.getElementById('igvp2').onclick = (event) => {
    event.preventDefault();
    let patientId = window.location.pathname.replace('/home/','');
      if(patientId === '/home' || patientId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("igvp2")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            patientId = value._id;
            parentId = key;
          }
        });
      }
    apiPatientApi.deletepatient( patientId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/home' ;}}});};document.getElementById('i00z9').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("i00z9")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/manage/' + transitionId;}};document.getElementById('iv33g').onclick = (event) => {
    event.preventDefault();
    let patientId = window.location.pathname.replace('/home/','');
      if(patientId === '/home' || patientId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("iv33g")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            patientId = value._id;
            parentId = key;
          }
        });
      }
    apiPatientApi.deletepatient( patientId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('ixwgvj').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("ixwgvj")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/manage/' + transitionId;}};document.getElementById('ihfj1y').onclick = (event) => {
    event.preventDefault();
    let patientId = window.location.pathname.replace('/home/','');
      if(patientId === '/home' || patientId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ihfj1y")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            patientId = value._id;
            parentId = key;
          }
        });
      }
    apiPatientApi.deletepatient( patientId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('i745rm').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("i745rm")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/manage/' + transitionId;}};document.getElementById('igbkri').onclick = (event) => {
    event.preventDefault();
    let patientId = window.location.pathname.replace('/home/','');
      if(patientId === '/home' || patientId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("igbkri")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            patientId = value._id;
            parentId = key;
          }
        });
      }
    apiPatientApi.deletepatient( patientId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('i7voqc').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("i7voqc")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/manage/' + transitionId;}};document.getElementById('ieh6hq').onclick = (event) => {
    event.preventDefault();
    let patientId = window.location.pathname.replace('/home/','');
      if(patientId === '/home' || patientId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ieh6hq")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            patientId = value._id;
            parentId = key;
          }
        });
      }
    apiPatientApi.deletepatient( patientId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('insbn4').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("insbn4")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/manage/' + transitionId;}};document.getElementById('ilch1i').onclick = (event) => {
    event.preventDefault();
    let patientId = window.location.pathname.replace('/home/','');
      if(patientId === '/home' || patientId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ilch1i")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            patientId = value._id;
            parentId = key;
          }
        });
      }
    apiPatientApi.deletepatient( patientId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('ikl6bq').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("ikl6bq")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/manage/' + transitionId;}};document.getElementById('ia664z').onclick = (event) => {
    event.preventDefault();
    let patientId = window.location.pathname.replace('/home/','');
      if(patientId === '/home' || patientId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ia664z")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            patientId = value._id;
            parentId = key;
          }
        });
      }
    apiPatientApi.deletepatient( patientId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('iilmvj').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("iilmvj")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/manage/' + transitionId;}};document.getElementById('i8v3by').onclick = (event) => {
    event.preventDefault();
    let patientId = window.location.pathname.replace('/home/','');
      if(patientId === '/home' || patientId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i8v3by")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            patientId = value._id;
            parentId = key;
          }
        });
      }
    apiPatientApi.deletepatient( patientId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('ifbpwl').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("ifbpwl")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/manage/' + transitionId;}};document.getElementById('ikue9n').onclick = (event) => {
    event.preventDefault();
    let patientId = window.location.pathname.replace('/home/','');
      if(patientId === '/home' || patientId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ikue9n")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            patientId = value._id;
            parentId = key;
          }
        });
      }
    apiPatientApi.deletepatient( patientId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('iaanam').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("iaanam")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/manage/' + transitionId;}};document.getElementById('ijxxan').onclick = (event) => {
    event.preventDefault();
    let patientId = window.location.pathname.replace('/home/','');
      if(patientId === '/home' || patientId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ijxxan")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            patientId = value._id;
            parentId = key;
          }
        });
      }
    apiPatientApi.deletepatient( patientId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('ibdamf').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("ibdamf")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/manage/' + transitionId;}};document.getElementById('ixy92x').onclick = (event) => {
    event.preventDefault();
    let patientId = window.location.pathname.replace('/home/','');
      if(patientId === '/home' || patientId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ixy92x")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            patientId = value._id;
            parentId = key;
          }
        });
      }
    apiPatientApi.deletepatient( patientId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('isgr0d').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("isgr0d")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/manage/' + transitionId;}};document.getElementById('iyupmi').onclick = (event) => {
    event.preventDefault();
    let patientId = window.location.pathname.replace('/home/','');
      if(patientId === '/home' || patientId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("iyupmi")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            patientId = value._id;
            parentId = key;
          }
        });
      }
    apiPatientApi.deletepatient( patientId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('i31sib').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("i31sib")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/manage/' + transitionId;}};document.getElementById('irhy8y').onclick = (event) => {
    event.preventDefault();
    let patientId = window.location.pathname.replace('/home/','');
      if(patientId === '/home' || patientId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("irhy8y")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            patientId = value._id;
            parentId = key;
          }
        });
      }
    apiPatientApi.deletepatient( patientId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('isillx').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("isillx")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/manage/' + transitionId;}};document.getElementById('ijssvh').onclick = (event) => {
    event.preventDefault();
    let patientId = window.location.pathname.replace('/home/','');
      if(patientId === '/home' || patientId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ijssvh")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            patientId = value._id;
            parentId = key;
          }
        });
      }
    apiPatientApi.deletepatient( patientId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};window.onload = () => {apiPatientApi.getAllpatient((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("ivs66").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'pname']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].pname;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'pname'){
        subDataElements[i].textContent = data[data.length -i -1].pname;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'lname']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].lname;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'lname'){
        subDataElements[i].textContent = data[data.length -i -1].lname;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'amka']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].amka;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'amka'){
        subDataElements[i].textContent = data[data.length -i -1].amka;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'mphone']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].mphone;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'mphone'){
        subDataElements[i].textContent = data[data.length -i -1].mphone;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});apiPatientApi.getAllpatient((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("ijv9y").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'pname']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].pname;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'pname'){
        subDataElements[i].textContent = data[data.length -i -1].pname;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'lname']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].lname;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'lname'){
        subDataElements[i].textContent = data[data.length -i -1].lname;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'amka']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].amka;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'amka'){
        subDataElements[i].textContent = data[data.length -i -1].amka;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'mphone']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].mphone;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'mphone'){
        subDataElements[i].textContent = data[data.length -i -1].mphone;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};