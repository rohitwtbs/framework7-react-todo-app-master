import React, { Component } from 'react';
import {
  Page, Navbar, NavTitle, NavRight, Link, List, ListItem, Toggle
} from 'framework7-react';

export default class HomePage extends Component {
  state = {
    tasks: [{
      name: 'Hello',
      alarmTime: '2:45'
    }, {
      name: 'Toptal',
      alarmTime: '3:45'
    }, {
      name: 'Blog',
      alarmTime: '4:45'
    }]
  };

  addTask = () => {
    this.$f7.dialog.prompt('Task Name:', 'Add Task', (name) => {
      this.setState({
        tasks: [
          ...this.state.tasks,
          { name }
        ]
      });
    });
  };
  deleteTask = (obj) => {
    console.log(obj)
    //let dummy = this.state.tasks.pop();
    let tasks=[];
    for(let objects in this.state.tasks) {
      console.log(this.state.tasks[objects]);
      if(this.state.tasks[objects].name !== obj.name){
        tasks.push(this.state.tasks[objects]);
      }
    }
   this.setState({
     tasks
   });
  };

  alarmDialog = () => {
    this.$f7.dialog.prompt('Set Alarm:', 'Enter Time', (name) => {
      this.setState({
        tasks: [
          ...this.state.tasks,
          { name }
        ]
      });
    });
  }

  render = () => (
    <Page>
      <Navbar>
        <NavTitle>To Do List</NavTitle>
        <NavRight>
          <Link iconOnly iconF7="add_round_fill" onClick={this.addTask}/>
          <Link iconOnly iconF7="alarm"/>
        </NavRight>
      </Navbar>

      <List simple-list>
        {this.state.tasks.map((task, i) => (
          <ListItem title={task.name} key={i}>
            <Toggle slot="after"/>
            <Link iconOnly iconF7="alarm" onClick={this.alarmDialog}/>
            <Link iconOnly iconF7="delete_round_fill" onClick={(e) => {this.deleteTask(task)}}/>
            <ListItem title={task.alarmTime} key={i}>
              </ListItem>
          </ListItem>
        ))}
      </List>
    </Page>
  );
}
