import React from 'react';
import { IonApp,IonContent, IonCard, IonGrid, IonRow, IonCol } from '@ionic/react';


class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state={
cardItems:[
    {
        title:"Total Products",
        count:"15",
        image:""
    },
    {
        title:"Total Catrgories",
        count:"5",
        image:""
    },
    {
        title:"Total Orders",
        count:"100",
        image:""
    },
    {
        title:"Total Users",
        count:"1",
        image:""
    },

]
        }
    }
    render(){
        return(
<IonApp>
    <IonContent>
        <IonCard>
{this.state.cardItems.map(p=>{
    
    <IonContent>
        <IonCard>
            <IonGrid>
                <IonRow>
<IonCol size="6">
    {p.title}</IonCol>
                    <IonCol size="6"><img src=" " /></IonCol>
                </IonRow>
            </IonGrid>
            </IonCard>

</IonContent>   
})}
        </IonCard>
    </IonContent>
</IonApp>
        )
    }
} 
export default Dashboard;