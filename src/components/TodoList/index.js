import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { remainingTodoListSelector } from '../../redux/selectors';

// using Redux core
// import { addTodo } from '../../redux/actions'

// using Redux toolkit
import todoListSlice from './todoListSlice';

export default function TodoList() {
  const dispatch = useDispatch()
  const [todoName, setTodoName] = useState('')
  const [priority, setPriority] = useState('Medium')

  const todoLists = useSelector(remainingTodoListSelector)

  const inputRef = useRef()

  const handleAddButtonClick = () => {
    dispatch(
      todoListSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        complete: false,
        priority: priority,
    }));
    setTodoName('');
    setPriority('Medium');
    inputRef.current.focus()
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' priority='High' />
        <Todo name='Learn Redux' priority='Medium' />
        <Todo name='Learn JavaScript' priority='Low' /> */}
        {todoLists.map(todo => 
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            priority={todo.priority}
            completed={todo.completed}
          />
        )}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input 
            ref={inputRef}
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
          <Select defaultValue="Medium" value={priority} onChange={(e) => setPriority(e)}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
