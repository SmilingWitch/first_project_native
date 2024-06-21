import {Text, FlatList} from "react-native"
import RepositoryItem from "./RepositoryItme";
import { useEffect, useState } from "react";
import useRepositories from "../hooks/useRepositories";

const RepositoryList = () => {

    const {repositories} = useRepositories()
    

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