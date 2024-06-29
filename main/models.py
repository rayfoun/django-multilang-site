from django.db import models

class Article(models.Model):
  title = models.CharField(max_length=255)
  content = models.CharField(max_length=1000)
  publication_date = models.DateField(null=True)

  def __str__(self):
    return f"{self.title}"