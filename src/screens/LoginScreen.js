import { styles } from '../styles/style';
import { ScrollView , Text , TouchableOpacity, Image, View} from 'react-native';

const aviso = () =>{
    alert('Você foi avisado')
}
export default function LoginScreen(){
    return(
        <ScrollView>

        <View style={styles.container}>

            <Image
                source={require('../assets/casual_dog.png')}
                style={styles.dog}
            />

            <Text style={styles.h1}>Ótimo dia!</Text>
            <Text style={styles.h3}> Como deseja acessar?</Text>

            <TouchableOpacity style={styles.btn1} onPress={aviso}>
                
                
                <Image
                    source={ require('../assets/Google.png')}
                    style={styles.google}
                    />
                <Text style={styles.textBtn1}>Como deseja acessar?</Text>
                
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn2}>
                <Text style={styles.textBtn2}>Outras opções</Text>
            </TouchableOpacity>

        </View>

        </ScrollView>
    )
}