# coding: utf-8

"""
    EdiFabric API

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: v1
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class EdiFabricCoreModelEdiEdifactS004(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'date_1': 'str',
        'time_2': 'str'
    }

    attribute_map = {
        'date_1': 'date_1',
        'time_2': 'time_2'
    }

    def __init__(self, date_1=None, time_2=None):  # noqa: E501
        """EdiFabricCoreModelEdiEdifactS004 - a model defined in Swagger"""  # noqa: E501

        self._date_1 = None
        self._time_2 = None
        self.discriminator = None

        if date_1 is not None:
            self.date_1 = date_1
        if time_2 is not None:
            self.time_2 = time_2

    @property
    def date_1(self):
        """Gets the date_1 of this EdiFabricCoreModelEdiEdifactS004.  # noqa: E501


        :return: The date_1 of this EdiFabricCoreModelEdiEdifactS004.  # noqa: E501
        :rtype: str
        """
        return self._date_1

    @date_1.setter
    def date_1(self, date_1):
        """Sets the date_1 of this EdiFabricCoreModelEdiEdifactS004.


        :param date_1: The date_1 of this EdiFabricCoreModelEdiEdifactS004.  # noqa: E501
        :type: str
        """

        self._date_1 = date_1

    @property
    def time_2(self):
        """Gets the time_2 of this EdiFabricCoreModelEdiEdifactS004.  # noqa: E501


        :return: The time_2 of this EdiFabricCoreModelEdiEdifactS004.  # noqa: E501
        :rtype: str
        """
        return self._time_2

    @time_2.setter
    def time_2(self, time_2):
        """Sets the time_2 of this EdiFabricCoreModelEdiEdifactS004.


        :param time_2: The time_2 of this EdiFabricCoreModelEdiEdifactS004.  # noqa: E501
        :type: str
        """

        self._time_2 = time_2

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(EdiFabricCoreModelEdiEdifactS004, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, EdiFabricCoreModelEdiEdifactS004):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
