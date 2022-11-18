import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'; //Pacote de Icons
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import api from '../../services/api';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {

    const [isFilterVisible, setIsFilterVisible] = useState(true);
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function handleTogleFilterIsVisible() {
        setIsFilterVisible(!isFilterVisible);
    }

    async function handleFilterSubmit() {
        loadFavorites(); 

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });

        setIsFilterVisible(false);
        setTeachers(response.data)
    }

    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map((teacher:Teacher) => {
                    return teacher.id;
                })

                setFavorites(favoritedTeachersIds);
            }
        })
    }

    useFocusEffect(() => {
        loadFavorites();
    });

    return (
        <View style={styles.container}>
            <PageHeader
                title="Proffys disponíveis"
                headerRight={(
                    <BorderlessButton style={styles.filterButtonHeader} enabled={!isFilterVisible} onPress={handleTogleFilterIsVisible} >
                        <Feather name="filter" color="#FFF" size={25} />
                    </BorderlessButton>
                )}
            >

                {isFilterVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            style={styles.input}
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            placeholder="Qual a Matéria?"
                            placeholderTextColor="#c1cccc"
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    style={styles.input}
                                    value={week_day}
                                    onChangeText={text => setWeekDay(text)}
                                    placeholder="Qual o dia?"
                                    placeholderTextColor="#c1cccc"
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    style={styles.input}
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    placeholder="Qual o horário?"
                                    placeholderTextColor="#c1cccc"
                                />
                            </View>
                        </View>

                        <RectButton style={styles.submitButton} onPress={handleFilterSubmit}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {teachers.map((element: Teacher) => {
                    return (
                        <TeacherItem
                            key={element.id}
                            teacher={element}
                            favorited={favorites.includes(element.id)}
                        />
                    )
                })}
            </ScrollView>
        </View>
    );
}

export default TeacherList;