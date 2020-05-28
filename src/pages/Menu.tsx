import React from 'react';
import { IonRouterOutlet,IonMenu, IonContent, IonList, IonItem, IonHeader,IonMenuButton, IonToolbar, IonTitle, IonButtons, IonApp, IonIcon, IonButton, IonLabel } from '@ionic/react';
import { Route } from 'react-router';
import List from './List'
import { home, layers, list, cart, flame } from 'ionicons/icons'

const Menu: React.FC = () =>{
return(
  <IonApp>
  <IonMenu menuId="main- menu" side="start" contentId="main-content">
  <IonHeader>
    <IonToolbar color="danger">
      <IonTitle>Grocery Dashboard</IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent>
    <IonList>
    <IonItem>
    <IonIcon icon={home} slot="start"></IonIcon>
<IonLabel>Home</IonLabel>
</IonItem>
      <IonItem>
      <IonIcon icon={layers} slot="start"></IonIcon>
      <IonLabel>Products</IonLabel>
      </IonItem>
      <IonItem>
      <IonIcon icon={list} slot="start"></IonIcon>
      <IonLabel>Category</IonLabel>
      </IonItem>
      <IonItem>
      <IonIcon icon={cart} slot="start"></IonIcon>
      <IonLabel>Cart</IonLabel>
      </IonItem>
      <IonItem>
      <IonIcon icon={flame} slot="start"></IonIcon>
      <IonLabel>Offer</IonLabel>
      </IonItem>
    </IonList>
  </IonContent>
</IonMenu>


<div id="main-content">
<IonHeader>
  <IonToolbar>
    <IonButtons slot="start">
      <IonMenuButton></IonMenuButton>
    </IonButtons>
<IonTitle>Product</IonTitle>
  </IonToolbar>
</IonHeader>

</div>
</IonApp>


)
};

export default Menu;
