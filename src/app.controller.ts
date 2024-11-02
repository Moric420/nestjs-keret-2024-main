import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')  
  root() {
    return {};  
  }
  getForm() {
    
    const formData = {
      name: '',
      startDate: '',
      endDate: '',
      isPaidLeave: false,
      employeeId: '',
      justification: ''
    };
    console.log('getForm called, returning formData:', formData);
    return { formData };
  }
}
