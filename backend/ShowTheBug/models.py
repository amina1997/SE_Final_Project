from django.db import models


class Event(models.Model):
    title = models.CharField(max_length=120)
    speaker = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    date = models.DateField()
    photo = models.ImageField(upload_to='events', default='SOME STRING')

    def _str_(self):
        return self.title
