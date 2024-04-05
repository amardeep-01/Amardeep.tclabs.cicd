import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

export function createGoal(summary: string, description: string, model: NgbDateStruct | undefined) {
    const goal = {
      title : summary,
      description: description,
      "status": "open",
      "dueDate": getDateString(model),
      "isGloballyVisible": true
      
    }
  
  return goal;
  
  }
  
  function getDateString(modal: any): string {
    
      return modal ? formatDate(modal) : '';
  
  }
  
  function formatDate(date: NgbDateStruct): string {
    const day = date.day.toString().padStart(2, '0');
    const month = date.month.toString().padStart(2, '0');
    const year = date.year.toString();
    return `${year}-${month}-${day}`;
  }