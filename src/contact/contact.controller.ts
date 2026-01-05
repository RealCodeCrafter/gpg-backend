import { Controller, Post, Body } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async submit(@Body() dto: CreateContactDto) {
    this.contactService.sendEmailAsync(dto).catch(err => {
      console.error('📨 Email background error:', err);
    });

    return {
      success: true,
      message: 'Xabaringiz yuborildi. Tez orada bog‘lanamiz!',
    };
  }
}
