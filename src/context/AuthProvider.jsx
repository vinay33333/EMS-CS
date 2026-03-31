import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        if (!localStorage.getItem('employees')) {
            setLocalStorage()
        }
        const { employees } = getLocalStorage()
        setUserData(employees)
    }, [])

    const updateTaskStatus = (employeeId, taskTitle, newStatus) => {
        const updatedData = userData.map((emp) => {
            if (emp.id === employeeId) {
                const updatedTasks = emp.tasks.map((task) => {
                    if (task.taskTitle === taskTitle) {
                        if (newStatus === 'active' && task.newTask) {
                            emp.taskCounts.newTask = Math.max(0, emp.taskCounts.newTask - 1);
                            emp.taskCounts.active += 1;
                            return { ...task, newTask: false, active: true };
                        }
                        if (newStatus === 'completed' && task.active) {
                            emp.taskCounts.active = Math.max(0, emp.taskCounts.active - 1);
                            emp.taskCounts.completed += 1;
                            return { ...task, active: false, completed: true };
                        }
                        if (newStatus === 'failed' && task.active) {
                            emp.taskCounts.active = Math.max(0, emp.taskCounts.active - 1);
                            emp.taskCounts.failed += 1;
                            return { ...task, active: false, failed: true };
                        }
                    }
                    return task;
                });
                emp.tasks = updatedTasks;
            }
            return emp;
        });

        setUserData(updatedData);
        localStorage.setItem('employees', JSON.stringify(updatedData));
    };

    const createNewTask = (taskObj, asignTo) => {
        const updatedData = userData.map((emp) => {
            if (emp.firstName.toLowerCase() === asignTo.toLowerCase()) {
                emp.tasks.push(taskObj);
                emp.taskCounts.newTask += 1;
            }
            return emp;
        });
        setUserData(updatedData);
        localStorage.setItem('employees', JSON.stringify(updatedData));
    };

    return (
        <AuthContext.Provider value={{ userData, setUserData, updateTaskStatus, createNewTask }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider