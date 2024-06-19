import {Text, FlatList} from "react-native"
import repositories from "../data/repositories"
import RepositoryItem from "./RepositoryItme";


const RepositoryList = () => {
    return(

        <FlatList data = {repositories}
        ItemSeparatorComponent={() => <Text>  </Text>}
        renderItem = {({item: repo}) => (
           <RepositoryItem props = {repo}/>
    )}>
        </FlatList>

    );
}


export default RepositoryList;