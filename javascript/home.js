let apiPatientApi = new TempApi.PatientApi();import TempApi from '../src/index';window.onload = () => {apiPatientApi.getAllpatient((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("ivs66").querySelectorAll( "[dataitem='true']" )].filter(
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