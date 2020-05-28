import React from 'react';
import { IonContent,IonApp,IonRouterOutlet, IonMenu, IonHeader, IonPage, IonTitle,IonIcon, IonToolbar,IonList, IonItem, IonLabel, } from '@ionic/react';


const List: React.FC = () =>{
  return(
    <IonApp>
    <IonMenu menuId="main- menu" contentId="main">
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle>Start Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
    <IonRouterOutlet id="main"></IonRouterOutlet>
    </IonApp>
  )
}

export default List;
