import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [
        {
            id: 1,
            status: 'pending',
            title: 'Make Videos For YouTube',
            description:
              'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
            date: '2023-08-28',
            assignedTo: 'Mir Hussain',
            priority: 'high',
          },
          {
            id: 1,
            status: 'pending',
            title: 'Remove Button',
            description:
              'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
            date: '2023-08-28',
            assignedTo: 'Mir Hussain',
            priority: 'high',
          },
          {
            id: 1,
            status: 'pending',
            title: 'Add Bookmark Feature',
            description:
              'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
            date: '2023-08-28',
            assignedTo: 'Mir Hussain',
            priority: 'high',
          }
    ]
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, {payload}) => {
            // state.tasks.push({id: state.tasks.length + 1, ...payload});
            if(state.tasks.length === 0) {
                state.tasks.push({id: 1, status: 'pending', ...payload});
            }
            else {
                const lastTask = state.tasks.at(-1);
                state.tasks.push({id: lastTask.id + 1, status: 'pending', ...payload});
            }
        },
        removeTask: (state, {payload}) => {
            state.tasks.filter((item) => item.id !== payload);
        }
    }
});

export const { addTask, removeTask } = tasksSlice.actions;

export default tasksSlice.reducer;