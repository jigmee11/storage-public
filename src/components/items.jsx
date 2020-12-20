import React, { createContext, useState, useEffect } from 'react'
import {storage} from './firebase'
import firebase from 'firebase'

export const Items = createContext();

export const ItemsProvider = (props) => {
      const [file, setFile] = useState([]);
      const [send, setSend] = useState({sending: "none", value: ""});
      const dataInstall = () => {
            setFile([]);
            const data = storage.ref().child("files/")
            data.listAll().then(function(res) {
                res.items.forEach(function(itemRef) {
                      let realUrl;
                      storage.ref().child(itemRef.fullPath).getDownloadURL().then(url=>{
                            realUrl = url;
                      })
                      storage.ref().child(itemRef.fullPath).getMetadata().then(metaData=>{
                            setFile(old=>[...old,[metaData.timeCreated, realUrl, itemRef.name]])
                      })
                });
              })
      }
      useEffect(()=>{
            dataInstall();
      }, []);
      const Add = async (value) => {
            if(value!=undefined&&value.target.files[0]!=undefined){
                  const metaData = {
                        contentType: value.type
                  }
                  const r = storage.ref().child(`files/${value.target.files[0].name}`).put(value.target.files[0]);
                  r.on('state_changed', function(snapshot){
                        // Observe state change events such as progress, pause, and resume
                        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        // console.log('Upload is ' + progress + '% done');
                        setSend(old=>{
                              let a = {};
                              a.sending="block";
                              a.value = Math.round(progress);
                              return a;
                        });
                        console.log(send.value)
                        switch (snapshot.state) {
                        case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                        case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                        }
                  }, function(error) {
                        // Handle unsuccessful uploads
                  }, function() {
                        // Handle successful uploads on complete
                        setSend(old=>{
                              old.sending="none";
                              old.value=""
                              return old;
                        })
                        r.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                        console.log('File available at', downloadURL);
                        });
                        dataInstall();
                  });
            }
      }
      const Delete = (name) => {
            const desertRef = storage.ref().child(`files/${name}`);
            desertRef.delete().then(function() {
                  console.log("done");
                  dataInstall();
                }).catch(function(error) {
                  // Uh-oh, an error occurred!
            });
      }
      return(
            <Items.Provider value={{file, Add, dataInstall, Delete, send, setSend}}>
                  {props.children}
            </Items.Provider>
      );
}