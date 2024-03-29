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


class EdiFabricCoreModelEdiEdifactS006(object):
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
        'application_sender_identification_1': 'str',
        'identification_code_qualifier_2': 'str'
    }

    attribute_map = {
        'application_sender_identification_1': 'applicationSenderIdentification_1',
        'identification_code_qualifier_2': 'identificationCodeQualifier_2'
    }

    def __init__(self, application_sender_identification_1=None, identification_code_qualifier_2=None):  # noqa: E501
        """EdiFabricCoreModelEdiEdifactS006 - a model defined in Swagger"""  # noqa: E501

        self._application_sender_identification_1 = None
        self._identification_code_qualifier_2 = None
        self.discriminator = None

        if application_sender_identification_1 is not None:
            self.application_sender_identification_1 = application_sender_identification_1
        if identification_code_qualifier_2 is not None:
            self.identification_code_qualifier_2 = identification_code_qualifier_2

    @property
    def application_sender_identification_1(self):
        """Gets the application_sender_identification_1 of this EdiFabricCoreModelEdiEdifactS006.  # noqa: E501


        :return: The application_sender_identification_1 of this EdiFabricCoreModelEdiEdifactS006.  # noqa: E501
        :rtype: str
        """
        return self._application_sender_identification_1

    @application_sender_identification_1.setter
    def application_sender_identification_1(self, application_sender_identification_1):
        """Sets the application_sender_identification_1 of this EdiFabricCoreModelEdiEdifactS006.


        :param application_sender_identification_1: The application_sender_identification_1 of this EdiFabricCoreModelEdiEdifactS006.  # noqa: E501
        :type: str
        """

        self._application_sender_identification_1 = application_sender_identification_1

    @property
    def identification_code_qualifier_2(self):
        """Gets the identification_code_qualifier_2 of this EdiFabricCoreModelEdiEdifactS006.  # noqa: E501


        :return: The identification_code_qualifier_2 of this EdiFabricCoreModelEdiEdifactS006.  # noqa: E501
        :rtype: str
        """
        return self._identification_code_qualifier_2

    @identification_code_qualifier_2.setter
    def identification_code_qualifier_2(self, identification_code_qualifier_2):
        """Sets the identification_code_qualifier_2 of this EdiFabricCoreModelEdiEdifactS006.


        :param identification_code_qualifier_2: The identification_code_qualifier_2 of this EdiFabricCoreModelEdiEdifactS006.  # noqa: E501
        :type: str
        """

        self._identification_code_qualifier_2 = identification_code_qualifier_2

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
        if issubclass(EdiFabricCoreModelEdiEdifactS006, dict):
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
        if not isinstance(other, EdiFabricCoreModelEdiEdifactS006):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
