from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()

class Message(models.Model):
    contact = models.ForeignKey(User, related_name='messages', on_delete=models.CASCADE)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.contact.user.username

    def last_10_messages(self):
        return Message.object.order_by('-timestamp').all()[:10]
