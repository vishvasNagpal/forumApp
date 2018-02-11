// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Styles from './Styles';
import { CheckListItem, Loader } from '../';
import { ImagesPath } from '../../theme';
import initialFormData from './initialFormData';


class CheckList extends Component {
  constructor() {
    super();
    const data = JSON.parse(JSON.stringify(initialFormData));
    this.state = {
      numberOfPages: 4,
      currentPage: 1,
      isLoading: false,
      formData: data,
      data: data['1'],
    };
  }
  paginate(nextPage: number) {
    const { numberOfPages } = this.state;
    if (nextPage <= numberOfPages && nextPage > 0) {
      this.setState({
        currentPage: nextPage,
        isLoading: true,
      });
      setTimeout(() => {
        this.setState({
          data: this.state.formData[`${nextPage}`],
          isLoading: false,
        });
      }, 1000);
    }
  }
  onItemSelect(id: number, radioYes: boolean, radioNo: boolean) {
    const data = this.state.formData;

    data[this.state.currentPage].forEach((item: Object, index: number) => {
      if (id === item.id) {
        data[this.state.currentPage][index].radioNo = radioNo;
        data[this.state.currentPage][index].radioYes = radioYes;
      }
    });
    this.setState({
      formData: data,
    });
  }
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.listArea}>
          {
            this.state.isLoading ?
              <Loader /> :
              <FlatList
                data={this.state.data}
                refershing={this.state.isLoading}
                keyExtractor={item => item.id}
                renderItem={
                  ({ item }) => (<CheckListItem
                    onItemSelect={
                      (id, radioYes, radioNo) => this.onItemSelect(id, radioYes, radioNo)}
                    item={item}
                  />)}
              />
          }
        </View>
        <View style={Styles.pagination}>
          <TouchableOpacity
            disabled={this.state.currentPage === 1}
            onPress={() => this.paginate(this.state.currentPage - 1)}
          >
            <Image source={ImagesPath.back} resizeMode="contain" style={Styles.pagiButton} />
          </TouchableOpacity>
          <TouchableOpacity
            disabled={this.state.currentPage >= this.state.numberOfPages}
            onPress={() => this.paginate(this.state.currentPage + 1)}
          >
            <Image source={ImagesPath.forward} resizeMode="contain" style={Styles.pagiButton} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state: Object) {
  return {
    checklist: state.checklistReducer.checklist,
  };
}

export default connect(mapStateToProps)(CheckList);
